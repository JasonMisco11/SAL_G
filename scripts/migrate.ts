import { createClient } from '@supabase/supabase-js';
import { blogPosts } from '../data/blog-posts';
import { siteConfig } from '../config/site';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables manually to avoid any dependency issues
try {
  const envPath = path.resolve(process.cwd(), '.env.local');
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      value = value.trim().replace(/(^['"]|['"]$)/g, '');
      process.env[key] = value;
    }
  });
} catch (e) {
  console.log("Could not load .env.local manually, relying on system env vars.");
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateData() {
  console.log("Starting migration...");

  // 1. Migrate Blog Posts
  console.log(`Found ${blogPosts.length} blog posts to migrate.`);
  for (const post of blogPosts) {
    const { data, error } = await supabase
      .from('blog_posts')
      .upsert({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        date: post.date,
        read_time: post.readTime,
        category: post.category,
        tags: post.tags,
        cover_image: post.coverImage,
        meta_description: post.metaDescription,
      }, { onConflict: 'slug' });

    if (error) {
      console.error(`Failed to migrate blog post ${post.slug}:`, error);
    } else {
      console.log(`Successfully migrated blog post: ${post.slug}`);
    }
  }

  // 2. Migrate Gallery Images
  const galleryImages = siteConfig.galleryImages;
  console.log(`Found ${galleryImages.length} gallery images to migrate.`);
  
  for (let i = 0; i < galleryImages.length; i++) {
    const imgUrl = galleryImages[i];
    
    // Check if it already exists
    const { data: existing } = await supabase
      .from('gallery_images')
      .select('id')
      .eq('url', imgUrl)
      .single();

    if (!existing) {
      const { data, error } = await supabase
        .from('gallery_images')
        .insert({
          url: imgUrl,
          display_order: i,
          alt_text: `Gallery Image ${i + 1}`
        });

      if (error) {
        console.error(`Failed to migrate gallery image ${imgUrl}:`, error);
      } else {
        console.log(`Successfully migrated gallery image: ${imgUrl}`);
      }
    } else {
      console.log(`Gallery image already exists: ${imgUrl}`);
    }
  }

  console.log("Migration complete!");
}

migrateData().catch(console.error);

import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'The Future of Minimalist Web Design',
    date: 'Jan 12, 2026',
    snippet:
      'Why white space is your best friend in 2026. A dive into the trends shaping modern UI.',
  },
  {
    id: 2,
    title: 'Securing React Applications',
    date: 'Dec 28, 2025',
    snippet: 'Common vulnerabilities in SPA and how to patch them effectively.',
  },
  {
    id: 3,
    title: 'Framer Motion 101: Smooth Animations',
    date: 'Nov 15, 2025',
    snippet: 'Adding delight to your users without compromising performance.',
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold font-heading mb-16">
        Latest <span className="text-[var(--color-accent)]">Thoughts</span>
      </h1>

      <div className="grid gap-8 max-w-4xl">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 border-b border-white/10 hover:border-[var(--color-accent)] transition-colors group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </h2>
              <span className="text-sm text-[var(--color-text-dim)] md:ml-4">
                {post.date}
              </span>
            </div>
            <p className="text-[var(--color-text-dim)]">{post.snippet}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

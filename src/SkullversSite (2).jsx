import React from "react";

export default function SkullversSite() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl font-bold mb-4">Skullvers</h1>
        <p className="text-xl mb-6">10,000 NFTs across 5 worlds — only 10 Divine rule them all.</p>
        <div className="space-x-4">
          <a href="https://twitter.com/" className="bg-blue-500 px-6 py-2 rounded-xl text-white">Follow on Twitter</a>
          <a href="#" className="bg-purple-600 px-6 py-2 rounded-xl text-white">Join Discord</a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">About the Collection</h2>
        <p>
          Skullvers is an emotion-driven NFT collection featuring 10,000 unique skulls forged
          in the fires of five realms: Cyberpunk, Samurai, Street, Fantasy, and Tribal. Each
          NFT captures emotion and detail, with 10 ultra-rare Divine Class NFTs reigning supreme.
        </p>
      </section>

      {/* Preview Gallery */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Preview Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-800 h-48 rounded-xl">Image {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Rarity & Tiers */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Tiers & Pricing</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Tier</th>
              <th className="border-b py-2">Price</th>
              <th className="border-b py-2">Supply</th>
              <th className="border-b py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Common</td>
              <td>$9–$19</td>
              <td>9000</td>
              <td>Core drop</td>
            </tr>
            <tr>
              <td className="py-2">Rare Skull Drop</td>
              <td>$29–$49</td>
              <td>500–700</td>
              <td>Special emotion + rarity</td>
            </tr>
            <tr>
              <td className="py-2">Ultra Legendary</td>
              <td>$99–$149</td>
              <td>10–50</td>
              <td>Enhanced detail, lore</td>
            </tr>
            <tr>
              <td className="py-2">Divine Class</td>
              <td>$500–$1000</td>
              <td>10</td>
              <td>1/1 elite NFTs</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Roadmap */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
        <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside">
          <li>Launch preview batch (20–30 NFTs)</li>
          <li>Grow Twitter and Discord community</li>
          <li>Main mint drop (10,000 NFTs)</li>
          <li>Divine Class reveal</li>
          <li>Secondary market & lore expansion</li>
          <li>Skullvers merch & future project access</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-10 text-gray-400 text-sm">
        © 2025 Skullvers. All rights reserved.
      </footer>
    </main>
  );
}

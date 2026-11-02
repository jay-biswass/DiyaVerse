"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import DiyaSvg from "@/components/ui/DiyaSvg";
import { GoldenBorderCorner } from "@/components/ui/GoldenBorder";
import { INITIAL_COMMUNITY_POSTS } from "@/data/greetings";
import { sound } from "@/lib/sound";
import { 
  Users, 
  Sparkles, 
  Heart, 
  Send, 
  MapPin, 
  MessageSquare, 
  Flame,
  Award
} from "lucide-react";

export default function CommunityWallPage() {
  const [posts, setPosts] = useState([]);
  const [sender, setSender] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("diyaverse_community_posts");
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch {
        setPosts(INITIAL_COMMUNITY_POSTS);
      }
    } else {
      setPosts(INITIAL_COMMUNITY_POSTS);
    }
  }, []);

  const handleLike = (id) => {
    sound.playDiyaSound();
    setPosts((prev) => {
      const updated = prev.map((p) => {
        if (p.id === id) {
          return { ...p, likes: p.likes + 1, userLiked: true };
        }
        return p;
      });
      localStorage.setItem("diyaverse_community_posts", JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || !sender.trim()) return;

    sound.playCelebrationSound();
    const newPost = {
      id: `post-${Date.now()}`,
      sender: sender.trim(),
      location: location.trim() || "Global Well-Wisher",
      message: message.trim(),
      timestamp: "Just now",
      likes: 1,
      userLiked: true,
    };

    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem("diyaverse_community_posts", JSON.stringify(updated));

    // Reset inputs
    setMessage("");
    setLocation("");

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#D4A64A", "#F5D79D", "#E68A32"],
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#54151F]/70 border border-[#D4A64A]/30 text-[#F5D79D] text-xs font-semibold uppercase tracking-wider mb-3">
          <Users className="w-3.5 h-3.5 text-[#D4A64A]" />
          <span>Global Fellowship</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-5xl font-bold gold-gradient-text mb-3">
          Community Diwali Blessing Wall
        </h1>

        <p className="text-sm sm:text-base text-[#F5E6C8]/80 font-light">
          Share your blessings, warm greetings, and prayers with fellow celebrants worldwide. Read uplifting thoughts and leave your digital light on the wall.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* --- LEFT: Submit Blessing Form --- */}
        <div className="lg:col-span-4 glass-festive rounded-3xl p-6 border border-[#D4A64A]/30 shadow-xl space-y-5 sticky top-24">
          <div className="flex items-center gap-2 border-b border-[#D4A64A]/20 pb-3">
            <DiyaSvg lit={true} size={32} glow={true} />
            <h2 className="font-cinzel text-base font-bold text-[#F5D79D]">
              Post a Diwali Blessing
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="e.g. Sanya Roy"
                className="w-full px-3.5 py-2 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                City / Campus (Optional)
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. JIS University, Kolkata"
                className="w-full px-3.5 py-2 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F5D79D] uppercase tracking-wider mb-1.5">
                Your Diwali Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write an auspicious prayer or wish for the world..."
                maxLength={250}
                className="w-full px-3.5 py-2 rounded-xl bg-[#27100D]/80 border border-[#D4A64A]/30 text-[#F5E6C8] placeholder-white/20 focus:outline-none focus:border-[#D4A64A] text-sm leading-relaxed"
                required
              />
              <span className="text-[10px] text-[#F5E6C8]/50 block text-right mt-1">
                {250 - message.length} characters left
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#27100D] bg-gradient-to-r from-[#F5D79D] to-[#D4A64A] shadow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-[#8F2028]" />
              <span>Kindle Message to Wall</span>
            </button>
          </form>

          <div className="p-3 rounded-xl bg-[#351014]/60 border border-[#D4A64A]/20 text-[11px] text-[#F5E6C8]/70">
            <span className="font-semibold text-[#F5D79D]">GDG & AWS Hackathon Notice:</span> Community messages are broadcast in real-time across all visitors.
          </div>
        </div>

        {/* --- RIGHT: Messages Wall Feed --- */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-[#F5D79D] uppercase tracking-wider font-semibold">
              Live Greetings ({posts.length})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="glass-festive rounded-2xl p-5 border border-[#D4A64A]/25 shadow-lg flex flex-col justify-between transition-all hover:border-[#D4A64A]/50 relative overflow-hidden"
              >
                <div className="absolute top-1 right-1 opacity-20 pointer-events-none">
                  <DiyaSvg lit={true} size={40} glow={false} />
                </div>

                <div>
                  {/* Sender details */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#54151F] border border-[#D4A64A]/40 flex items-center justify-center text-xs font-bold text-[#F5D79D]">
                        {post.sender.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#F5D79D]">
                          {post.sender}
                        </h3>
                        {post.location && (
                          <p className="text-[10px] text-[#F5E6C8]/60 flex items-center gap-0.5">
                            <MapPin className="w-2.5 h-2.5 text-[#D4A64A]" />
                            {post.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="text-[10px] text-[#F5E6C8]/50">
                      {post.timestamp}
                    </span>
                  </div>

                  {/* Message */}
                  <p className="text-xs sm:text-sm text-[#F5E6C8]/90 leading-relaxed italic mb-4 font-light">
                    &ldquo;{post.message}&rdquo;
                  </p>
                </div>

                {/* Footer with Like interaction */}
                <div className="pt-3 border-t border-[#D4A64A]/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-[#F5D79D]/70 font-devanagari">
                    शुभ दीपावली
                  </span>

                  <button
                    onClick={() => handleLike(post.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-colors ${
                      post.userLiked
                        ? "bg-[#8F2028] text-[#F5D79D] border border-[#D4A64A]/40"
                        : "bg-[#27100D]/70 text-[#F5E6C8]/70 hover:text-[#F5D79D] border border-white/5"
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        post.userLiked ? "fill-[#F5D79D] text-[#F5D79D]" : ""
                      }`}
                    />
                    <span>{post.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

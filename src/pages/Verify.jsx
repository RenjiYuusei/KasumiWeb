import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ClipboardCopy, Terminal, Lightbulb, Clock, CheckCircle } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import { Card } from "../components/ui/Card";

export default function Verify() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [status, setStatus] = useState({ msg: "", type: "" });

  useEffect(() => {
    if (!code) {
      setStatus({ msg: "❌ Thiếu tham số code. Hãy chạy lại /getlink trong Discord.", type: "err" });
    } else {
      // Auto copy logic could go here, but browsers block clipboard write without user interaction usually
      // However, we can try
      navigator.clipboard.writeText(code).then(() => {
        setStatus({ msg: "✅ Đã tự động sao chép mã vào clipboard", type: "ok" });
      }).catch(() => {
        // Fallback or silent fail
      });
    }
  }, [code]);

  const handleCopy = async (text, successMsg) => {
    if (!code) {
      setStatus({ msg: "Không có mã để sao chép", type: "err" });
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setStatus({ msg: successMsg, type: "ok" });
    } catch (err) {
      setStatus({ msg: "❌ Không thể sao chép", type: "err" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950 flex items-center justify-center p-3 sm:p-4 md:p-6 font-sans relative overflow-hidden selection:bg-green-500/30">
      <ParticlesBackground theme="green" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <Card className="border-green-500/20 shadow-green-500/10 relative overflow-hidden">

          {/* Success Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-500/10 to-transparent opacity-60 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 mb-4 tracking-tight px-2">
                Hoàn Tất Xác Minh!
              </h1>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-400/30 rounded-full backdrop-blur-sm animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                <span className="text-xs sm:text-sm font-bold text-green-300 uppercase tracking-wider">Kasumi Reset Code</span>
              </div>
              <p className="text-slate-300 mt-4 sm:mt-6 leading-relaxed text-xs sm:text-sm md:text-base px-2">
                Chúc mừng! Bạn đã vượt link thành công. Đây là mã reset giới hạn của bạn:
              </p>
            </div>

            {/* Code Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-2 border-dashed border-purple-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 my-6 sm:my-8 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shimmer"></div>
              <div className="relative z-10">
                <div className="text-xs uppercase tracking-widest text-slate-400 text-center mb-3 sm:mb-4 font-bold">Mã Reset Của Bạn</div>
                <div className="font-mono text-lg sm:text-2xl md:text-3xl font-black text-purple-400 text-center p-3 sm:p-4 md:p-6 bg-purple-500/10 rounded-lg sm:rounded-xl break-all select-all border border-purple-500/20">
                  {code || "Đang tải..."}
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy(code, "✅ Đã sao chép mã")}
                className="group flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 text-sm sm:text-base min-h-[48px]"
              >
                <ClipboardCopy className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Sao chép mã</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy(`/reset code:${code}`, "✅ Đã sao chép lệnh /reset")}
                className="group flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-bold rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 text-sm sm:text-base min-h-[48px]"
              >
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Copy lệnh /reset</span>
              </motion.button>
            </div>

            {/* Status Message */}
            <div className="h-6 mb-4 text-center">
                <AnimatePresence mode="wait">
                    {status.msg && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`text-sm sm:text-base font-semibold ${
                                status.type === 'ok' ? 'text-green-400' :
                                status.type === 'err' ? 'text-red-400' : 'text-yellow-400'
                            }`}
                        >
                            {status.msg}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 border-l-4 border-green-500 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm mb-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-green-400 mb-2 sm:mb-3">Cách sử dụng</h3>
                  <ul className="space-y-2 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold flex-shrink-0 min-w-[1.5rem]">1.</span>
                      <span>Sao chép mã ở trên (đã auto copy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold flex-shrink-0 min-w-[1.5rem]">2.</span>
                      <span>Quay lại Discord</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold flex-shrink-0 min-w-[1.5rem]">3.</span>
                      <span>Nhập lệnh: <code className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-400/30 rounded text-xs font-mono text-purple-300">/reset code:&lt;mã&gt;</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold flex-shrink-0 min-w-[1.5rem]">4.</span>
                      <span>Giới hạn reset về <strong className="text-green-300">0/1</strong> - Tạo <strong className="text-green-300">1 tài khoản mới</strong>!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center">
              <p className="text-slate-400 text-xs sm:text-sm flex items-center justify-center gap-2 flex-wrap">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Mã có hiệu lực <strong className="text-purple-300">30 phút</strong> và chỉ dùng được <strong className="text-purple-300">1 lần</strong></span>
              </p>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
}

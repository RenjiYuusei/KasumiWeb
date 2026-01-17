import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Clock, ShieldCheck, Terminal, Link, MousePointerClick, ClipboardCopy, CheckCircle2 } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import { Card } from "../components/ui/Card";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden font-sans selection:bg-purple-500/30">
      <ParticlesBackground theme="purple" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 bg-clip-text text-transparent tracking-tight animate-glow mb-4 px-2 drop-shadow-lg">
            Kasumi
          </h1>
        </motion.div>

        {/* Main Card */}
        <Card className="border-purple-500/20 shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-500 group mb-6 sm:mb-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/10 border border-purple-400/30 rounded-full mb-5 sm:mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
            <span className="text-xs sm:text-sm font-bold text-purple-300 uppercase tracking-wider">Reset Giới Hạn</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-3 sm:mb-4 tracking-tight">
            Vượt Link Để Reset
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base max-w-3xl">
            Bạn đã đạt giới hạn <strong className="text-purple-300">1 tài khoản/ngày</strong>. Vượt link rút gọn để nhận mã reset và tiếp tục tạo tài khoản ngay lập tức!
          </p>

          {/* Warning Box */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-red-500/10 to-red-600/5 border-l-4 border-red-500 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-red-400 mb-2 sm:mb-3">Lưu ý quan trọng</h3>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span>Mỗi lần vượt link = Reset về <strong className="text-purple-300">1 tài khoản mới</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span>Mã có hiệu lực <strong className="text-purple-300">30 phút</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span>Mỗi mã chỉ dùng được <strong className="text-purple-300">1 lần</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span>Sử dụng lệnh <code className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-400/30 rounded text-xs font-mono text-purple-300">/getlink</code> trong Discord để bắt đầu</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
          >
            {[
              {
                step: 1,
                title: "Nhận Link",
                desc: "Dùng lệnh /getlink trong Discord để nhận link rút gọn.",
                icon: Link,
                code: "/getlink"
              },
              {
                step: 2,
                title: "Vượt Link",
                desc: "Mở link rút gọn, hoàn tất xác minh để được chuyển đến trang nhận mã.",
                icon: MousePointerClick,
              },
              {
                step: 3,
                title: "Copy Mã",
                desc: "Mã có dạng Kasumi_xxxxx sẽ tự động copy vào clipboard của bạn.",
                icon: ClipboardCopy,
                code: "Kasumi_xxxxx"
              },
              {
                step: 4,
                title: "Reset Ngay",
                desc: "Quay lại Discord dùng /reset code:<mã> để reset về 0/1 tài khoản.",
                icon: CheckCircle2,
                code: "/reset code:<mã>"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group/tile backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[140px] sm:min-h-[160px]"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform -translate-x-full group-hover/tile:translate-x-full transition-transform duration-700"></div>
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-purple-400 to-purple-300 bg-clip-text text-transparent mb-3 sm:mb-4">{item.step}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
                   {item.desc.split(item.code || "XXXXXX").map((part, i, arr) => (
                     <span key={i}>
                       {part}
                       {i < arr.length - 1 && (
                         <code className="px-1.5 sm:px-2 py-0.5 bg-purple-500/20 border border-purple-400/30 rounded text-xs font-mono text-purple-300">
                           {item.code}
                         </code>
                       )}
                     </span>
                   ))}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Card>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-400 text-xs sm:text-sm md:text-base py-6 sm:py-8"
        >
          <p className="flex items-center justify-center gap-2 flex-wrap px-4">
            <span>© 2025 • Made by</span>
            <a href="https://discord.gg/Kasumi" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 inline-flex items-center gap-1 min-h-[44px]">
              Doan Dinh Hoang
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

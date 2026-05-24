import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, Block, NAME } from "@/components/SiteLayout";

export const Route = createFileRoute("/tong-ket")({
  component: TongKet,
  head: () => ({
    meta: [
      { title: "Tổng kết — Suy ngẫm cá nhân | Đỗ Văn Sang" },
      { name: "description", content: "Tổng kết, kỹ năng, đạo đức AI và suy ngẫm cá nhân sau học phần." },
    ],
  }),
});

const skills = [
  { icon: "🗂️", name: "Quản lý Tệp & Thư mục", level: "THÀNH THẠO", pct: 85 },
  { icon: "🔍", name: "Nghiên cứu Nâng cao", level: "ĐANG PHÁT TRIỂN", pct: 78 },
  { icon: "⚡", name: "Thiết kế Câu lệnh (Prompt)", level: "THÀNH THẠO", pct: 80 },
  { icon: "🤝", name: "Cộng tác Nhóm Số", level: "VỮNG CHẮC", pct: 90 },
  { icon: "🎨", name: "Sáng tạo Nội dung AI", level: "ĐANG PHÁT TRIỂN", pct: 72 },
  { icon: "⚖️", name: "Liêm chính Học thuật & Đạo đức", level: "THÀNH THẠO", pct: 88 },
  { icon: "📊", name: "Phân tích & Đọc hiểu Dữ liệu", level: "MỚI BẮT ĐẦU", pct: 60 },
  { icon: "🌐", name: "Giao tiếp Số", level: "VỮNG CHẮC", pct: 83 },
];

const tools = ["Google Drive","Notion","Trello","ChatGPT","Google Gemini","Canva","Google Scholar","Zoom","Microsoft 365","Runway ML","ElevenLabs","CapCut","Tiêu chí CRAAP","Moodle"];

const ethics = [
  { icon: "🔎", title: "01. Minh Bạch", text: "Tôi luôn ghi chú rõ ràng khi công cụ AI hỗ trợ tạo nội dung học thuật, bao gồm tên công cụ, phiên bản và mức độ sử dụng — coi AI như bất kỳ nguồn tài liệu nào khác." },
  { icon: "✅", title: "02. Kiểm tra & Xác minh", text: "Đầu ra của AI sẽ không bao giờ được nộp mà không có kiểm tra độc lập từ nguồn tin cậy. AI có thể sai — tôi coi mỗi câu trả lời của AI là điểm khởi đầu, không phải kết luận." },
  { icon: "🔒", title: "03. Bảo vệ Dữ liệu Cá nhân", text: "Tôi sẽ không nhập thông tin nhận dạng cá nhân của mình hoặc người khác vào hệ thống AI công cộng mà không có sự đồng ý, và sẽ đọc kỹ chính sách lưu trữ dữ liệu của mỗi công cụ." },
  { icon: "🧠", title: "04. Tư duy Phản biện Là Trọng tâm", text: "AI là công cụ khuếch đại, không phải thay thế tư duy của tôi. Tôi cam kết hình thành phân tích riêng trước khi hỏi AI, rồi so sánh kết quả để học hỏi sâu hơn." },
  { icon: "🌱", title: "05. Công bằng & Hòa nhập", text: "Tôi sẽ chủ động kiểm tra nội dung do AI tạo ra để phát hiện thiên kiến, rập khuôn hay ngôn ngữ loại trừ, và dùng chiến lược prompt hướng tới kết quả đa dạng, bình đẳng." },
];

function TongKet() {
  return (
    <SiteLayout>
      <SectionTitle id="skills" eyebrow="Năng lực số" title="Kỹ Năng Số Đã Đạt Được" sub="Bản đồ tự đánh giá các năng lực số được phát triển trong suốt học kỳ. Con số % thể hiện mức độ thành thạo cá nhân." />
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-5">
        {skills.map(s => (
          <div key={s.name} className="p-5 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl">{s.icon}</span>
                <div className="min-w-0">
                  <p className="font-[Be_Vietnam_Pro,sans-serif] font-semibold text-stone-100 truncate">{s.name}</p>
                  <p className="text-[10px] tracking-widest font-bold text-lime-500/80">{s.level}</p>
                </div>
              </div>
              <span className="font-[Be_Vietnam_Pro,sans-serif] font-bold text-lime-400">{s.pct}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[#1a2614] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-lime-500 to-emerald-400" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </section>
      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-wrap gap-2">
        {tools.map(t => (
          <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-[#121a0f] border border-[#1e3319] text-stone-300">{t}</span>
        ))}
      </div>

      <SectionTitle id="ethics" eyebrow="AI & Đạo đức" title="Quy Tắc Đạo Đức AI Cá Nhân" sub="Năm nguyên tắc cá nhân tôi cam kết thực hiện khi tích hợp công cụ AI vào học tập và nghiên cứu." />
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ethics.map(e => (
          <div key={e.title} className="p-6 rounded-2xl bg-[#0f160c] border border-[#1e3319]">
            <span className="text-3xl">{e.icon}</span>
            <h3 className="mt-4 font-[Be_Vietnam_Pro,sans-serif] font-bold text-stone-100">{e.title}</h3>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed">{e.text}</p>
          </div>
        ))}
        <div className="md:col-span-2 lg:col-span-3 p-8 rounded-2xl bg-gradient-to-br from-lime-500/10 to-emerald-500/5 border border-lime-500/30">
          <p className="font-[Playfair_Display,serif] italic text-2xl md:text-3xl text-stone-100 leading-snug">
            “Rủi ro thực sự của AI không phải là nó sẽ suy nghĩ thay chúng ta — mà là chúng ta sẽ ngừng tự suy nghĩ.”
          </p>
          <p className="mt-3 text-sm text-lime-400 font-bold tracking-wide">— Suy ngẫm cá nhân, 2025</p>
        </div>
      </section>

      <SectionTitle id="reflection" eyebrow="Tổng kết học kỳ" title="Suy Ngẫm Cá Nhân" />
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <blockquote className="p-8 rounded-2xl bg-[#0f160c] border-l-4 border-lime-500 font-[Playfair_Display,serif] italic text-xl md:text-2xl text-stone-100 leading-relaxed">
          “Khóa học này không chỉ dạy tôi cách dùng công nghệ — nó dạy tôi cách suy nghĩ cùng với công nghệ.”
        </blockquote>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <Block title="🗺️ Hành Trình Học Kỳ Của Tôi">
            Khi đăng ký khóa học này, tôi nghĩ đây sẽ là một môn khảo sát công nghệ thông thường. Những gì tôi trải qua là một chương trình học thực hành có cấu trúc, thách thức tôi xem xét lại cách mình tương tác với công cụ số mỗi ngày. Từ việc sắp xếp lại hàng năm tệp lộn xộn đến tạo ra video đầu tiên với hỗ trợ của AI, mỗi bài tập đưa tôi vào vùng đất mới — và tôi đã trưởng thành hơn từ đó.
          </Block>
          <Block title="💡 Bài Học Cốt Lõi">
            <ol className="space-y-3 list-decimal list-inside marker:text-lime-400 marker:font-bold">
              <li>Năng lực số là kỹ năng, không phải tố chất bẩm sinh.</li>
              <li>AI khuếch đại ý định — câu hỏi kém cho câu trả lời kém.</li>
              <li>Đạo đức không thể thương lượng.</li>
              <li>Cộng tác nhân lên kết quả vượt ngoài giới hạn cá nhân.</li>
            </ol>
          </Block>
          <Block title="🏆 Điều Tôi Tự Hào Nhất">
            Tôi tự hào nhất về Bài tập 5 — video giải thích với hỗ trợ AI. Nó yêu cầu tôi tích hợp năm công cụ khác nhau theo trình tự, quản lý tầm nhìn sáng tạo xuyên suốt các nền tảng, và đánh giá phê phán từng đầu ra của AI trước khi đưa vào sản phẩm.
          </Block>
          <Block title="⚠️ Thử Thách Đã Đối Mặt">
            Thử thách khó nhất là cưỡng lại cám dỗ chấp nhận đầu ra của AI một cách vô phê phán. Đầu học kỳ, tôi nộp văn bản do AI soạn thảo có chứa lỗi thực tế tinh vi — đây là bài học về cái giá của sự phụ thuộc quá mức. Tôi áp dụng quy tắc xác minh hai nguồn cá nhân sau sự cố đó.
          </Block>
        </div>

        <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-[#121a0f] to-[#0a0f08] border border-[#1e3319] text-center">
          <p className="text-stone-300 leading-relaxed">Portfolio này không phải sản phẩm hoàn thiện — đây là tài liệu sống về sự phát triển.</p>
          <p className="mt-4 text-sm tracking-widest text-lime-400 font-bold">{NAME.toUpperCase()} · 2025</p>
        </div>
      </section>
    </SiteLayout>
  );
}
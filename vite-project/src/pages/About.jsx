import Profile from '../assets/profile/profile.jpg';

export default function About() {
  return (
    <div className="min-h-screen text-zinc-800 font-sans p-0 md:p-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row min-h-[1100px] relative">
        
        {/* --- SIDEBAR (ฝั่งซ้าย) --- */}
        <aside className="w-full md:w-[35%] bg-zinc-900 text-white p-8 flex flex-col relative z-20">
          
          {/* ส่วนรูปภาพ: ปรับให้ลอยตัวและมีขนาดที่สมดุล */}
          <div className="relative flex justify-center mb-10 mt-6">
            {/* วงกลมซ้อนหลังเพื่อให้รูปดูเด่น (Optional) */}
            <div className="absolute inset-0 bg-sky-400/10 blur-3xl rounded-full"></div>
            
            <div className="relative w-52 h-52 rounded-full border-[6px] border-zinc-800 overflow-hidden shadow-2xl bg-zinc-800 transition-transform hover:scale-105 duration-300">
              <img 
                src={Profile} 
                alt="Profile" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }} // ปรับตรงนี้ถ้าหัวในรูปโดนตัด
              />
            </div>
          </div>

          {/* ชื่อและตำแหน่ง */}
          <div className="mb-12 border-b border-zinc-800 pb-8 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-sky-400 leading-[0.9] uppercase">
              Kittitach <br /> Laocharoen
            </h1>
            <p className="text-lg mt-3 text-zinc-400 font-light tracking-widest uppercase">Computer Engineering</p>
            <div className="w-12 h-1 bg-sky-400 mt-4 mx-auto md:mx-0"></div>
          </div>

          {/* ข้อมูลติดต่อ (เหมือนเดิม) */}
          <section className="space-y-6 mb-12">
            <h2 className="text-sky-400 font-bold uppercase tracking-[0.2em] text-[11px]">Contact Info</h2>
            <div className="space-y-4 text-sm font-light">
              <p className="flex flex-col"><span className="text-sky-400 font-bold text-[9px] uppercase tracking-tighter mb-1">Location</span> Nakhonsawan, Thailand</p>
              <p className="flex flex-col"><span className="text-sky-400 font-bold text-[9px] uppercase tracking-tighter mb-1">Phone</span> 062-5438877</p>
              <p className="flex flex-col"><span className="text-sky-400 font-bold text-[9px] uppercase tracking-tighter mb-1">Email</span> fanta.kittitach@gmail.com</p>
              <p className="flex flex-col"><span className="text-sky-400 font-bold text-[9px] uppercase tracking-tighter mb-1">Facebook</span> Best Kittitach</p>
            </div>
          </section>

          {/* ความเชี่ยวชาญ */}
          <section className="mb-12">
            <h2 className="text-sky-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-6">Expertise</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block font-bold text-zinc-100 italic tracking-wide">Programming</span>
                <span className="text-zinc-400 text-xs leading-relaxed">Python, C, C++, Java, SQL</span>
              </li>
              <li>
                <span className="block font-bold text-zinc-100 italic tracking-wide">IoT & Hardware</span>
                <span className="text-zinc-400 text-xs leading-relaxed">Arduino, ESP32, Raspberry Pi, LoRa</span>
              </li>
              <li>
                <span className="block font-bold text-zinc-100 italic tracking-wide">Frameworks</span>
                <span className="text-zinc-400 text-xs leading-relaxed">Flask, Django, Node-RED</span>
              </li>
            </ul>
          </section>

          {/* Reference */}
          <section className="mt-auto pt-10 border-t border-zinc-800">
            <h2 className="text-sky-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Reference</h2>
            <div className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider">
              <p className="font-bold text-zinc-300">Available upon request</p>
              <p>Academic & Professional references</p>
            </div>
          </section>
        </aside>

        {/* --- MAIN CONTENT (เหมือนเดิม) --- */}
        <main className="w-full md:w-[65%] bg-white p-10 md:p-16 relative z-10">
          <div className="absolute left-10 md:left-16 top-0 bottom-0 w-[1px] bg-zinc-200"></div>
          <div className="relative z-10 space-y-16">
            {/* Profile Section */}
            <section className="relative pl-12">
              <div className="absolute -left-[53px] top-1 w-5 h-5 bg-zinc-900 rounded-full border-[3px] border-white shadow-sm"></div>
              <h2 className="text-2xl font-bold text-sky-500 uppercase tracking-widest mb-6">Profile</h2>
              <p className="text-zinc-500 leading-7 text-sm max-w-2xl">
                นักพัฒนา IoT และซอฟต์แวร์ที่มีความชำนาญด้านภาษา Python และ C มีประสบการณ์ในการพัฒนา Embedded Systems 
                และระบบ Backend สำหรับเชื่อมต่ออุปกรณ์ IoT เข้าใจทั้งฮาร์ดแวร์และซอฟต์แวร์ และสามารถทำงานเป็นทีมได้ดี 
                มีความหลงใหลในการแก้ปัญหาด้วยเทคโนโลยีและนวัตกรรมใหม่ๆ
              </p>
            </section>

            {/* Experience & Education sections (เหมือนเดิม) */}
            <section className="relative pl-12">
              <div className="absolute -left-[53px] top-1 w-5 h-5 bg-zinc-900 rounded-full border-[3px] border-white shadow-sm"></div>
              <h2 className="text-2xl font-bold text-sky-500 uppercase tracking-widest mb-8">Experience</h2>
              <div className="space-y-10">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-zinc-50 pb-1 mb-2">
                    <h3 className="font-bold text-zinc-800 uppercase italic">ราชมงคลวิชาการวิศวกรรมระดับชาติ</h3>
                    <span className="text-[10px] font-black text-zinc-400 tracking-tighter bg-zinc-100 px-2 py-0.5 rounded">2022</span>
                  </div>
                  <p className="text-sky-500 text-[10px] font-black uppercase tracking-widest mb-2">ชนะเลิศอันดับ 1 ครั้งที่ 14</p>
                  <p className="text-zinc-500 text-xs leading-relaxed italic">รายละเอียดการแข่งขันและการพัฒนาโปรเจกต์...</p>
                </div>
              </div>
            </section>
            
            <section className="relative pl-12">
              <div className="absolute -left-[53px] top-1 w-5 h-5 bg-zinc-900 rounded-full border-[3px] border-white shadow-sm"></div>
              <h2 className="text-2xl font-bold text-sky-500 uppercase tracking-widest mb-8">Education</h2>
              <div className="space-y-8 text-sm">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-zinc-800 uppercase">มทร.ธัญบุรี</h3>
                    <span className="text-xs font-medium text-zinc-400 italic">Graduated 2022</span>
                  </div>
                  <p className="text-zinc-400 text-xs mt-1">วิศวกรรมคอมพิวเตอร์</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
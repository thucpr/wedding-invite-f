import weddingCouple from "@/assets/wedding-couple.jpg";
import { Clock, Calendar } from "lucide-react";

interface EventItemProps {
  time: string;
  date: string;
  event: string;
}

const EventItem = ({ time, date, event }: EventItemProps) => (
  <div className="flex items-center justify-between gap-1 py-1">
    <div className="flex items-center gap-1 min-w-[80px]">
      <Clock className="w-3 h-3 opacity-70 flex-shrink-0" />
      <div className="text-left">
        <p className="text-[10px] sm:text-xs font-medium leading-tight">{time}</p>
        <p className="text-[9px] sm:text-[10px] opacity-70">{date}</p>
      </div>
    </div>
    <div className="flex items-center gap-1">
      <Calendar className="w-3 h-3 opacity-70 flex-shrink-0" />
      <p className="text-[10px] sm:text-xs text-right">{event}</p>
    </div>
  </div>
);

const TimelineSection = () => {
  return (
    <section className="relative min-h-[280px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${weddingCouple})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-4 px-4 text-center text-white">
        <p className="font-elegant text-[10px] uppercase tracking-[0.2em] mb-1 opacity-90">
          Sự kiện đặc biệt của chúng tôi
        </p>
        
        <h2 className="font-script text-2xl sm:text-3xl mb-3">
          Lịch trình
        </h2>
        
        {/* Timeline Cards */}
        <div className="flex gap-3 max-w-md mx-auto">
          {/* Nhà Gái */}
          <div className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg overflow-hidden">
            <h4 className="font-elegant font-semibold text-xs uppercase tracking-wider py-2 border-b border-white/30 bg-white/5">
              Nhà Gái
            </h4>
            <div className="p-2 space-y-0">
              <EventItem 
                time="09:00, CN" 
                date="07/12/2025" 
                event="Bữa cơm thân mật" 
              />
              <EventItem 
                time="08:00, CN" 
                date="07/12/2025" 
                event="Lễ vu quy" 
              />
            </div>
          </div>
          
          {/* Nhà Trai */}
          <div className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg overflow-hidden">
            <h4 className="font-elegant font-semibold text-xs uppercase tracking-wider py-2 border-b border-white/30 bg-white/5">
              Nhà Trai
            </h4>
            <div className="p-2 space-y-0">
              <EventItem 
                time="17:00, Thứ 7" 
                date="13/12/2025" 
                event="Bữa cơm thân mật" 
              />
              <EventItem 
                time="11:00, CN" 
                date="14/12/2025" 
                event="Lễ thành hôn" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

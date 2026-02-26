
import weddingCouple from "../../image/g6.jpg";
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
<p className="text-[10px] sm:text-xs font-medium leading-tight">
  {time}
</p>
<p className="text-[10px] sm:text-xs opacity-90 font-medium">
  {date}
</p>

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
    <section className="relative min-h-[75vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
  className="absolute inset-0 bg-cover bg-no-repeat bg-[position:50%_30%]"
  style={{ backgroundImage: `url(${weddingCouple})` }}
>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white w-full">
           <p className="font-serif text-xs uppercase tracking-[0.25em] mb-1 opacity-90">
              SỰ KIỆN ĐẶC BIỆT CỦA CHÚNG TÔI
           </p>


          <h2 className="font-playfair text-sm sm:text-base mb-2 font-medium tracking-widest uppercase">
              LỊCH TRÌNH
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
                time="16:00, Thứ 4" 
                date="11/03/2026" 
                event="Bữa cơm thân mật" 
              />
              <EventItem 
                time="16:00, Thứ 2" 
                date="09/03/2026" 
                event="Lễ Vu Quy" 
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
                time="17:00, Thứ 4" 
                date="11/03/2026" 
                event="Bữa cơm thân mật" 
              />
              <EventItem 
                time="11:00, Thứ 5" 
                date="12/03/2026" 
                event="Lễ Thành Hôn" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

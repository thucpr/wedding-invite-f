import { useSearchParams } from "react-router-dom";
import groomAvatar from "@/assets/groom-avatar.jpg";
import brideAvatar from "@/assets/bride-avatar.jpg";
import { Heart } from "lucide-react";

const HeroSection = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("name") || searchParams.get("ten") || "Bạn";

  return (
    <section className="wedding-section bg-background text-center pt-6 pb-4">
      {/* Greeting */}
      <h1 className="font-playfair text-3xl sm:text-4xl text-primary mb-2 animate-fade-in">
        Xin chào {guestName}!
      </h1>

  
      {/* Wedding Date */}
      <p className="text-primary font-elegant text-base font-semibold mb-2">
        12.03.2026
      </p>
      
      {/* Invitation Text */}
<p className="font-sans text-base sm:text-lg text-pink-500 max-w-xs mx-auto leading-snug mb-4">
  Chúng tôi trân trọng mời bạn và người thương đến dự lễ cưới của chúng tôi
</p>

      
      {/* Couple Avatars */}
      <div className="flex items-center justify-center gap-0 mb-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg -mr-4 z-10">
          <img 
            src={groomAvatar} 
            alt="Chú rể - Bá Thức"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-20 bg-background rounded-full p-1">
          <Heart className="w-6 h-6 text-primary fill-primary animate-heart-beat" />
        </div>
        
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg -ml-4 z-10">
          <img 
            src={brideAvatar} 
            alt="Cô dâu - Vân Anh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

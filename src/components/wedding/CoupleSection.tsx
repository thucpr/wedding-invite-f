const CoupleSection = () => {
  return (
    <section className="wedding-section bg-background pb-4">
      <div className="flex justify-between gap-4 max-w-md mx-auto px-2">
        {/* Groom */}
        <div className="flex-1 text-center">
          <h3 className="font-script text-xl sm:text-2xl text-primary mb-1">
            Quốc Khánh
          </h3>
          <p className="font-elegant text-xs sm:text-sm text-foreground/80 leading-snug">
            Chàng IT, cả ngày chỉ biết debug, ai ngờ dính luôn "bug tình cảm" với cô Merchandiser. 
            Từ đó, chàng IT chẳng còn "gỡ lỗi", mà chỉ biết mắc lỗi cho tình yêu! 😂
          </p>
        </div>
        
        {/* Bride */}
        <div className="flex-1 text-center">
          <h3 className="font-script text-xl sm:text-2xl text-primary mb-1">
            Thu Phương
          </h3>
          <p className="font-elegant text-xs sm:text-sm text-foreground/80 leading-snug">
            Nàng Merchandiser, xinh gái, năng động, tính giá, duyệt mẫu nhanh như gió, 
            vậy mà chỉ chậm một nhịp... là rơi vào "bản thiết kế tình yêu" của chàng IT! 🥰
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;

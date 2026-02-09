const CoupleSection = () => {
  return (
    <section className="wedding-section bg-background pb-4">
      <div className="flex justify-between gap-4 max-w-md mx-auto px-2">
        {/* Groom */}
        <div className="flex-1 text-center">
          <h3 className="font-script text-xl sm:text-2xl text-primary mb-1">
            Bá Thức
          </h3>
        <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-snug">
            Chàng IT quen sửa lỗi bug 😂, gặp nàng mới biết, có những "vấn đề" sinh ra để yêu 
            và chăm sóc cả đời 🥰
        </p>
        </div>
        
        {/* Bride */}
        <div className="flex-1 text-center">
          <h3 className="font-script text-xl sm:text-2xl text-primary mb-1">
            Vân Anh
          </h3>
          <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-snug">
            Nàng CS, xinh gái, năng động, duyệt mẫu nhanh như gió, 
            vậy mà chỉ chậm một nhịp... là rơi vào "bản thiết kế tình yêu" của chàng IT! 🥰
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;

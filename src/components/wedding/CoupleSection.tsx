const CoupleSection = () => {
  return (
    <section className="wedding-section bg-background pb-4">
      <div className="flex justify-between gap-4 max-w-md mx-auto px-2">
        {/* Groom */}
        <div className="flex-1 text-center">
          <h3 className="font-script text-xl sm:text-2xl text-primary mb-1">
            Bá Thức
          </h3>
        <p className="font-sans text-xs sm:text-sm text-pink-500 max-w-xs mx-auto leading-snug mb-4">
            Chàng IT quen viết code và sửa bug, khi gặp đúng người, chàng nhận ra có một “vấn đề” không cần sửa chữa - chỉ cần yêu thương và bảo vệ cả đời 😍
        </p>
        </div>
        
        {/* Bride */}
        <div className="flex-1 text-center">
          <h3 className="font-script text-xl sm:text-2xl text-primary mb-1">
            Vân Anh
          </h3>
          <p className="font-sans text-xs sm:text-sm text-pink-500 max-w-xs mx-auto leading-snug mb-4">
            Nàng CS xinh xắn với nụ cười dịu dàng, quen lắng nghe và thấu hiểu cảm xúc của khách hàng nàng tình cỡ đã gặp được “vị khách” muốn ở bên để chăm sóc suốt đời và làm bến đỗ hạnh phúc💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;

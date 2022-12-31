import CarouselColumn from './CarouselColumn';
import './style.scss';

export default function MainCarousel() {
  return (
    <div className="MainCarousel">
      <div className="CarouselBanner">
        <img
          src="https://warpzone.me/wp-content/uploads/2018/07/Red-Dead-Redemption-2-Wallpaper-Full-HD-KeyArt-1920x1080.jpg"
          alt="read dead logo"
        />
      </div>
      <CarouselColumn />
    </div>
  );
}

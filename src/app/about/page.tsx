import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section">
      <div className="image-container" data-aos="zoom-in">
        <div className="red-line"></div>
        <Image
          src={"/about/banner.png"}
          alt="banner"
          width={1509} // Set width based on the image dimensions
          height={512} // Set height based on the image dimensions
          className="image-full"
        />
      </div>

      <div className="content-container" data-aos="zoom-in">
        <h1 className="title">About Us</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in euismod ipsum, sagittis condimentum ex. Sed aliquam tellus malesuada nunc semper pulvinar. Mauris ac metus vel neque venenatis cursus ac mollis orci. Mauris auctor nec dui vel suscipit. Mauris varius massa ut tellus pretium fermentum. Sed lobortis mattis lorem, eu viverra est. Quisque non aliquam mi, non finibus arcu. Sed maximus odio nibh, et elementum mauris varius at. Nam congue nibh tortor. Etiam iaculis ante eu iaculis ultrices. Aliquam sed magna magna. Aliquam tellus justo, egestas et erat vitae, mattis molestie augue.
        </p>
        <p className="paragraph">
          Fusce egestas eget leo nec dapibus. Morbi feugiat mi nec tellus faucibus, dignissim feugiat lectus interdum. Sed dolor libero, mollis cursus convallis quis, ullamcorper eget felis. Suspendisse sit amet dolor diam. Pellentesque venenatis vulputate urna a scelerisque. Donec id tortor et ipsum ultrices bibendum. Sed laoreet volutpat odio. Proin a lobortis quam, vel malesuada nulla. Proin nec molestie sem. Duis sed nisi faucibus, molestie tortor sed, ullamcorper dolor. Ut at purus et nibh pretium eleifend non vitae mi. Donec vulputate eu nunc nec fermentum. Aenean nec fermentum purus. Phasellus ac quam lacus. Nam bibendum porttitor neque, quis molestie ante ullamcorper vel. In hac habitasse platea dictumst.
        </p>
        <p className="paragraph">
          Suspendisse vestibulum non lectus in mollis. Nulla interdum vulputate sem, ut finibus leo tristique tincidunt. Duis non lectus a purus suscipit faucibus ut vel turpis. Integer et cursus metus. Duis sodales posuere purus at facilisis. Donec ac mi non mi sodales efficitur sed nec tortor. Mauris ultricies molestie tortor vitae scelerisque. Aliquam vulputate libero a velit accumsan vehicula.
        </p>
      </div>
    </section>
  );
};

export default About;

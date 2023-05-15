import React from "react";
import User from "../components/User";

const BlogDetail = () => {
  return (
    <div className="blog-detail">
      <div className="left-content">
        <h3>Blog title</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias
          quos voluptatem voluptates qui iure velit laudantium recusandae nemo
          quaerat assumenda asperiores eius mollitia odit, maxime illo
          explicabo, possimus vel fuga nostrum? Ex quaerat, atque in error
          nesciunt pariatur esse tempora cum a voluptas aut adipisci inventore
          quasi praesentium reprehenderit ipsa quisquam deserunt magnam veniam
          totam. Molestias nisi beatae velit quia voluptas ipsa. Rerum quod
          quaerat temporibus, rem odit soluta odio animi quos distinctio neque
          quis nemo velit provident cumque dolores deleniti inventore dolor
          obcaecati accusamus nam? Sint temporibus deleniti nulla at porro nisi
          quam velit maiores vitae, optio ullam quas quod perspiciatis magnam
          voluptatum eius voluptate blanditiis quibusdam accusantium facere
          dicta! Ab saepe recusandae modi, vel reprehenderit, inventore ea rem
          a, voluptate hic ipsam officia assumenda sed architecto pariatur
          consectetur dolore! Reprehenderit doloribus aliquam animi asperiores!
          Culpa, officiis molestiae reiciendis, incidunt ea inventore eius et
          dolor unde fugit facilis voluptatum nobis ipsa accusamus, modi labore.
          Eligendi obcaecati accusantium et ducimus qui, tempora odio sequi id
          dolorem possimus numquam temporibus ut molestiae earum tenetur
          sapiente velit eius. Ratione nemo voluptatum dolore nobis incidunt
          maxime praesentium, iure dolor amet culpa eum qui fuga. Quos
          asperiores minus sequi inventore! Sequi, et nemo?
        </p>
      </div>
      <div className="right-content">
        <h3>About Author</h3>
        <User />
      </div>
    </div>
  );
};

export default BlogDetail;

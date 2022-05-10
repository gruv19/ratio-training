const articleTemplate = (type) => (`<article class="article ${(type != 'default') ? `article--${type}` : ''}">
<img src="https://naked-science.ru/wp-content/uploads/2016/04/article_Vehicle-Prototype-Image-Banner-Cropped-600px-1200x796.jpg" alt="" class="article__img">
<div class="article__content">
  <p class="article__tag">FEATURED ARTICLE</p>
  <h1 class="article__title">World’s Most Dangerous Technology Ever Made.</h1>
  <div class="article__meta">
    <span class="article__author">Leslie Pena</span>
    <span class="article__divider"></span>
    <span class="article__date-time">April 25, 2012 (6 mins read)</span>
  </div>
  <p class="article__text">
    Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt.
    Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
    Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
  </p>
</div>
</article>`);

export default articleTemplate;

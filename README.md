## Powdered Toast Site - Hounder Code Challenge

# Contributors:

<br />
<img  align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/65795477?v=4" width="44" height="44" alt="@CrowdedAstronaut">

**Ross Phillips** - Full Stack Web Developer<br>
[GitHub](https://github.com/CrowdedAstronaut) • [LinkedIn](https://www.linkedin.com/in/johnrossphillips/)

<br />

# Table of Contents

- [About this project](#about)
- [Workflow](#userstories)
- [Technologies](#technologies)
- [Links](#links)
- [Learning Experience](#learning)
- [Future Direction](#future)

<hr />
<br />


## Project Description <a name="about"></a>

Powdered Toast is a deployed, mobile first, responsive site about powdered toast. The site allows users to learn more about powdered toast, it's history, ways to eat it, good food pairings, as well as a form to sign up for the newsletter and a link to the newsletter. This project was an exercise in:

- Mobile First Methodology
- Pixel Perfect Design Implementation
- SCSS
- Semantic naming conventions
- Flexbox
- CSS Grid



### Mobile Preview

![Mobile Gif](https://raw.githubusercontent.com/CrowdedAstronaut/powdered_toast/main/assets/powdered-toast.gif)

### Desktop Preview

![Desktop Preview](https://github.com/CrowdedAstronaut/powdered_toast/raw/main/assets/powdered-toast-desktop-preview.png)

</br>

# User Stories <a name="userstories"></a>

### As a user of daily-HUD, I would like to be able to:

- view the history of powdered toast, ways to eat it, good food pairings, and a link to the powdered toast newsletter.
- fill out a form, and subscribe to the newsletter.
- Easily navigate to different parts of the page.
- See different views of the site depending on if I'm visiting from a mobile or desktop device.

</br>
# Technologies <a name="technologies"></a>

<table>
  <tbody>
    <tr>
      <td>Front End Languages</td>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
        <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
      <td>Design</td>
      <td>
        <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
      </td>
    </tr>
    <tr>
      <td>Utilities</td>
      <td>
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>
          <img alt="Github Pages" src="https://img.shields.io/badge/github-100000?style=for-the-badge&logo=github&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>

<hr />
<br />


## Learning Experience <a name="leaarning"></a>

### This challenge tested all of my layout skills, some of the things that stood out to me were:
1) mobile first - I always try to code things stacked vertically & then use some sort of responsive media query to unstack for desktop.
2) width/height vs max-width & max height. If a design says the max-width for a container is 1440px desktop & 375px mobile - what's the best root structure to implement those rules?
3) relative positioning, absolute positioning, & z-index. Figuring out how to stack the logo and the hamburger menu on top of the hero image was a gun challenge.
4) pixel perfect design - Coding something from a Figma design file is one of my favorite challenges to tackle. There were a lot of details to pay attention to here, I'm curious how close I got.
5) responsive nav, hamburger menu, no JavaScript - I'm proud of this work.
6) css variables/mixins - this challenge had lots of different line heights & font sizes declared as part of the layout. I created a lot of SASS variables, but I think there is a more concise way. I think it's possible to store 2 properties (font-size & line height) in 1 rule.
7) sass - I built this project using vanilla CSS and I used sass for seperation of concerns.
8) changing the fill color of svgs using the CSS function filter(). That was a new discovery.

## Future Directions <a name="future"></a>
I'd like to get the desktop version a little closer to spec. The nav needs to be centered, and all of the font-size/line height values change on desktop. Those changes are just a media query away, but I did not get to address them by the time of this commit. I would also like to implement the image carousel functionality with either CSS or JS.

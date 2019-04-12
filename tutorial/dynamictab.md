---
description: '작성자 : 스칼렛'
---

# dynamicTab

## 코드

```markup
  <div class="container">
  <!-- Tabs -->
  <ul id="nav-tab" class="nav">
    <li class="active"><a href="#home">Home</a></li>
    <li><a href="#profile">Profile</a></li>
    <li><a href="#messages">Messages</a></li>
    <li><a href="#settings">Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div class="tab-pane active" id="home">
      <h4>Home Panel Content</h4> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.</p> </div>
    <div class="tab-pane" id="profile">
      <h4>Profile Panel</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio, tempora incidunt aliquid adipisci, minus rerum optio libero quae provident sed at dignissimos, quia nostrum! Fuga dolorum quia hic magni.</p></div>
    <div class="tab-pane" id="messages">
      <h4>Messages Panel</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quos, at qui aspernatur minus animi hic sunt necessitatibus incidunt molestiae reprehenderit ratione neque odit ipsa. Nemo laborum consequatur adipisci beatae!</p>
    </div>
    <div class="tab-pane" id="settings">
      <h4>Settings Panel</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus sed odit iste vitae, magnam amet illum laudantium ea! Fugiat consectetur consequuntur qui eos obcaecati sequi ipsam repellat vero voluptate.</p>
    </div>
  </div>
</div>
```

```css
body {
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #444;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;

  li {
    display: inline-flex;

    a {
      text-decoration: none;
      color: darkgray;
      padding: 10px;
      transition: all .3s ease-in-out;
      border-bottom: 1px solid transparent;
      &:hover {
        color: gray;
      }
    }
  }
}

.nav .active a { 
  color: slateblue; 
  border-bottom: 1px solid slateblue;
  &:hover {
    border-color: transparent;
    background: slateblue;
    color: white;
  }
}

.tab-pane { 
  display: none;
}

.tab-pane.active { 
  display: block; 
}
```

```javascript
function onTabClick(event) {
  var activeTabs = document.querySelectorAll('.active');

  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '');
  });

  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

var element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);
```

## 코드 출처

* [https://web-crunch.com/how-to-create-tabs-with-vanilla-javascript/](https://web-crunch.com/how-to-create-tabs-with-vanilla-javascript/)


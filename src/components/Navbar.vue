<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <div class="nav-link"><strong>Blog app</strong></div>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/posts">Posts</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/add">Add</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>
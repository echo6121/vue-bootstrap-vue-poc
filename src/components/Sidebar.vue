<template>
  <div id="sidebar-wrapper" class="shadow-lg">
    <ul class="sidebar-nav text-center">
      <li class="sidebar-brand text-center pt-2 pb-3 mb-5">
        <a href="#">
          <img
            src="../assets/lereta-logo@3x.png"
            alt="lereta.logo"
            width="75%"
          />
        </a>
      </li>
      <li class="mt-5">
        <router-link to="/">
          <img src="../assets/icon-dashboard-white.svg" alt="dashboard-icon" />
          <p>Dashboard</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img
            src="../assets/icon-applications-white.svg"
            alt="dashboard-icon"
          />
          <p>Application</p>
        </router-link>
      </li>
      <li>
        <a href="#">
          <img src="../assets/icon-reporting-white.svg" alt="reporting-icon" />
          <p>Reporting</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/icon-search-white.svg" alt="search-icon" />
          <p>Search</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {};
  }
};
</script>

<style scoped>
#sidebar-wrapper {
  font-size: 0.85rem;
  font-weight: 100;
  z-index: 1000;
  position: fixed;
  left: 90px;
  width: 0;
  height: 100%;
  margin-left: -90px;
  overflow-y: auto;
  background: #0f3d4d;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 104px;
}

/* Sidebar Styles */
.sidebar-nav {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  line-height: 40px;
  width: 104px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding-top: 15px;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background-color: #336b80;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 104px;
  }

  #wrapper.toggled {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 104px;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 0;
  }

  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }

  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}
</style>

<template>
  <div id="app">
    <div id="wrapper">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    'sidebar': Sidebar,
    'dashboard': Dashboard
  }
}
</script>

<style scoped>
body {
  width:1440px;
  max-width:1440px;
  background-color:#fafafa;
}

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 104px;
}

#wrapper.toggled {
  width: 104px;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 104px;
  }

  #wrapper.toggled {
    padding-left: 0;
  }

  #wrapper.toggled {
    width: 0;
  }

  #wrapper.toggled {
    position: relative;
    margin-right: 0;
  }
}

</style>

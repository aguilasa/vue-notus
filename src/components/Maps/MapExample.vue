<template>
  <div>
    <GMapMap :center="mapCenter" :zoom="12" map-type-id="roadmap" class="relative w-full rounded h-600-px"
      :options="mapOptions">
      <GMapMarker :position="mapCenter" :animation="2" title="Hello World!" @click="openShowInfoWindow">
        <GMapInfoWindow :opened="showInfoWindow" :closeclick="true" @closeclick="closeShowInfoWindow">
          <div class="info-window-content">
            <h2>Vue Notus</h2>
            <p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showInfoWindow: false,
      mapCenter: { lat: 40.748817, lng: -73.985428 },
      mapOptions: {
        scrollwheel: false,
        styles: [
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#444444' }],
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f2f2f2' }],
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#5e72e4' }, { visibility: 'on' }],
          },
        ],
      }
    }
  },
  methods: {
    openShowInfoWindow() {
      this.showInfoWindow = true;
    },
    closeShowInfoWindow() {
      this.showInfoWindow = false;
    }
  },
}
</script>

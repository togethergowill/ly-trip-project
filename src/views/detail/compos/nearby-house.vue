<template>
  <div class="nearby-house">
    <show-detail title="位置周边" moreText="查看周边更多位置信息">
      <template #default>
        <div class="container" ref="mapRef"></div>
      </template>
    </show-detail>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue"
  import showDetail from "@/components/show-detail/show-detail.vue"

  const props = defineProps({
    mapData: {
      type: Object,
      default: () => ({})
    }
  })

  const mapRef = ref()
  const BMap = window.BMapGL;
  const { longitude, latitude } = props.mapData

  onMounted(() => {
    const map = new BMap.Map(mapRef.value);
    const point = new BMap.Point(longitude, latitude);
    map.centerAndZoom(point, 15);
    const marker = new BMap.Marker(point);
    map.addOverlay(marker)
    const opts = {
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      type: BMAP_NAVIGATION_CONTROL_ZOOM,
    }
    map.addControl(new BMap.NavigationControl(opts));
  })
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 250px;
}
</style>
<template>
  <W2rVue />
</template>

<script>
import W2rVue from "~/components/services/w2r/W2r.vue";

import { toggle_class_on_focus, add_class_on_focus } from "@/assets/scripts/dom_utils";

export default {
  components: {
    W2rVue,
  },
  mounted: () => {
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });

    add_class_on_focus({
      [".faded_out"]: "fade_in",
      ["#program #top_section"]: "scale_down",
    });
  },
};
</script>

<style></style>

import { shallowMount } from "@vue/test-utils";
import PCInput from "@/components/common/PCInput.vue";

describe("PCInput.vue", () => {
  it("renders props.placeholder when passed", () => {
    const placeholder = "new message";
    const wrapper = shallowMount(PCInput, {
      propsData: { placeholder },
    });
    const input = wrapper.find("input");
    expect(input.attributes().placeholder).toMatch(placeholder);
  });

  it("emits input event whn value change", () => {
    const placeholder = "new message";
    const wrapper = shallowMount(PCInput, {
      propsData: { placeholder },
    });
    const input = wrapper.find("input");
    input.trigger("input");
    expect(wrapper.emitted().input).toBeTruthy();
  });
});

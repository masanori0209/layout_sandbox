import { mount } from '@vue/test-utils'
import Body from '@/components/Body.vue'

describe('Body.vue', () => {
  it('renders a Body', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.html()).toMatch("<div><p>HelloWorld!!</p></div>")
  })
})
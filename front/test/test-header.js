import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders a HelloWorld', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.html()).toMatch("<div><p>HelloWorld!!</p></div>")
  })
})
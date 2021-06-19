import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders a Header', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toMatch("<div><p>HelloWorld!!</p></div>")
  })
})
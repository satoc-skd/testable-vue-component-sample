import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import GlobalHeader from "@/containers/GlobalHeader.vue"
import Menu from "@/components/Menu.vue"
import Vuex from "vuex"
import menuItems from "../_mockData/menuItems.json"
// localのVueを作る
const localVue = createLocalVue()
// localのVueにVuexをインストール
localVue.use(Vuex)
describe("GlobalHeader.vue", () => {
  let store

  // 毎テストケース実行前にstoreを初期化する
  beforeAll(() => {
    store = new Vuex.Store({
      state: {
        siteTitle: "test site title",
        menuItems,
      },
    })
  })

  describe("methods", () => {
    it("clickMenuItem", () => {
      // Vueインスタンス作成時にstoreとlocalVueを渡す
      const wrapper = shallowMount(GlobalHeader, { store, localVue })
      wrapper.vm.onClickMenuItem(menuItems[0])
      expect(wrapper.emitted("navigate")).toBeTruthy()
      expect(wrapper.emitted("navigate")[0][0]).toEqual({
        name: menuItems[0].name,
      })
    })
    it("navigateRoot", () => {
      const wrapper = shallowMount(GlobalHeader, { store, localVue })
      wrapper.vm.navigateRoot()
      expect(wrapper.emitted("navigate")).toBeTruthy()
      expect(wrapper.emitted("navigate")[0][0]).toEqual({
        name: "root",
      })
    })
  })

  describe("template", () => {
    it("@click=navigateRoot", () => {
      const mock = jest.fn()
      const wrapper = shallowMount(GlobalHeader, { store, localVue })
      wrapper.setMethods({
        navigateRoot: mock,
      })
      wrapper.find(".GlobalHeader_SiteTitle").trigger("click")
      expect(mock).toHaveBeenCalled()
    })
    it("@clickMenuItem=onClickMenuItem", () => {
      const mock = jest.fn()
      const wrapper = shallowMount(GlobalHeader, { store, localVue })
      wrapper.setMethods({
        onClickMenuItem: mock,
      })
      const menu = wrapper.find(Menu)
      menu.vm.$emit("clickMenuItem")
      expect(mock).toHaveBeenCalled()
    })
    it("snapshot", () => {
      const wrapper = mount(GlobalHeader, { store, localVue })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})

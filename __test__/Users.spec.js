
import { shallowMount } from '@vue/test-utils'
import Users from '../src/components/Users/Users'

describe('Users', () => {
    it('should render to a snapshot when list is empty', () => {
        const UserData = { users: [] }
        const wrapper = shallowMount(Users, { UserData })
        expect(wrapper.element).toMatchSnapshot()
})

    it('should render to a snapshot when list has items', () => {
        const UserData = { users: [] }
        const wrapper = shallowMount(Users, { UserData })
        expect(wrapper.element).toMatchSnapshot()
    })
})
import { expect } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import mutations from '@/store/mutations';
import TodoItem from '@/components/TodoItem';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("Todo component", () => {

  it("it should add todo item to the state", () => {
    const state = {
        todos: []
    };
    const items = { "title": "Task 1", "completed": false };
    const result = [{ "title": "Task 1", "completed": false }];

    mutations.ADD_ITEM(state, items)
    expect(state.todos).eql(result)
  });

  it("it should remove todo item from the state", () => {
    const state = {
        todos: [
            { "title": "Task 1", "completed": false },
            { "title": "Task 2", "completed": true }
        ]
    };
    const items = { "title": "Task 2", "completed": true };
    const result = [{ "title": "Task 1", "completed": false }];

    mutations.REMOVE_ITEM(state, items)
    expect(state.todos).eql(result)
  });

  it("it should render the list with tasks", () => {
    const newItem = { "title": "Task 1", "completed": false};

    const TodoItemWrapper = mount(TodoItem, {
      localVue,
      propsData: { 
        item: newItem
      }
    });

    expect(TodoItemWrapper.html()).to.contain('Task 1');
    expect(TodoItemWrapper.props('item')).to.contain(newItem);
  });

});

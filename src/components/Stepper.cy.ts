import Stepper from './Stepper.vue'
import { h } from 'vue'

const counterSelector = '[data-cy=counter]'
const incrementSelector = '[aria-label=increment]'
const decrementSelector = '[aria-label=decrement]'

describe('<Stepper />', () => {
  it('ステッパーの初期値は 0 である', () => {
    cy.mount(Stepper)
    cy.get(counterSelector).should('have.text', '0')
  })

  it('ステッパーの初期値を props で指定することができる', () => {
    cy.mount(Stepper, { props: { initial: 100 } })
    cy.get(counterSelector).should('have.text', '100')
  })

  it('+ボタンが押下されると、カウンターがインクリメントされる', () => {
    cy.mount(Stepper)
    cy.get(incrementSelector).click()
    cy.get(counterSelector).should('have.text', '1')
  })

  it('-ボタンが押下されると、カウンターがデクリメントされる', () => {
    cy.mount(Stepper)
    cy.get(decrementSelector).click()
    cy.get(counterSelector).should('have.text', '-1')
  })

  it('+ボタンが押下されると、change イベントでカウンターの値が取得できる', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(Stepper, { props: { onChange: onChangeSpy } })
    cy.get(incrementSelector).click()
    cy.get('@onChangeSpy').should('be.calledWith', 1)
  })

  it('-ボタンが押下されると、change イベントでカウンターの値が取得できる', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(Stepper, { props: { onChange: onChangeSpy } })
    cy.get(decrementSelector).click()
    cy.get('@onChangeSpy').should('be.calledWith', -1)
  })

  it('+ボタンと-ボタンを複数回押下すると、押下に応じてカウンタが増減する', () => {
    cy.mount(Stepper, { props: { initial: 100 } })
    cy.get(counterSelector).should('have.text', '100')
    cy.get(incrementSelector).click().click()
    cy.get(counterSelector).should('have.text', '102')
    cy.get(decrementSelector).click().click().click()
    cy.get(counterSelector).should('have.text', '99')
  })

  it('スロットを注入することで、カウンターの出力をカスタマイズすることができる', () => {
    cy.mount(Stepper, {
      props: { initial: 100 },
      slots: {
        counter: props => h('span', { 'data-cy': 'counter' }, props.count)
      }
    })
    cy.get(counterSelector).should('have.text', '100')
  })
})

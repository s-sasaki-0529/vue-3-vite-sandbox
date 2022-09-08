import SuperComponent from './SuperComponent.vue'

describe('<Child />', () => {
  beforeEach(() => {
    cy.mount(SuperComponent)
  })

  describe('メッセージ', () => {
    it('デフォルトで日本語メッセージが表示されている', () => {
      cy.get('[data-cy=message]').should('have.text', 'こんにちは、世界')
    })

    it('トグルボタンを押下すると、英語メッセージが表示される', () => {
      cy.get('[data-cy=toggle]').click()
      cy.get('[data-cy=message]').should('have.text', 'hello world')
    })
  })

  describe('カウンター', () => {
    it('カウンターの初期値は0', () => {
      cy.get('[data-cy=count]').should('have.text', '0')
    })

    it('+ボタンと-ボタンで押下で、カウンターの値を増減できる', () => {
      cy.get('[data-cy=increment]').click()
      cy.get('[data-cy=increment]').click()
      cy.get('[data-cy=count]').should('have.text', '2')
      cy.get('[data-cy=decrement]').click()
      cy.get('[data-cy=count]').should('have.text', '1')
    })
  })

  describe('フッターリンク', () => {
    it('フッターに /about へのリンクが表示されている', () => {
      cy.get('[data-cy=link]').should('have.attr', 'href', '/about')
    })
  })
})

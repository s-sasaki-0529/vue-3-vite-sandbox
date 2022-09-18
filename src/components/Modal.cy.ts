import Modal from './Modal.vue'

const headerSelector = '[data-cy=modal-header]'
const contentSelector = '[data-cy=modal-content]'
const footerSelector = '[data-cy=modal-footer]'

describe('<Modal />', () => {
  it('ヘッダーにスロットを注入しない場合、ヘッダーはデフォルトタイトルにフォールバックする', () => {
    cy.mount(Modal)
    cy.get(headerSelector).should('have.text', 'No Title')
  })

  it('ヘッダーに名前付きスロットを注入した場合、ヘッダーにスロットの内容が表示される', () => {
    cy.mount(Modal, { slots: { header: 'Custom Title' } })
    cy.get(headerSelector).should('have.text', 'Custom Title')
  })

  it('デフォルトスロットを注入した場合、モーダルコンテンツにスロットの内容が表示される', () => {
    cy.mount(Modal, { slots: { default: 'Modal Content' } })
    cy.get(contentSelector).should('have.text', 'Modal Content')
  })

  it('フッターにスロットを注入しない場合、フッター要素自体が表示されない', () => {
    cy.mount(Modal)
    cy.get(footerSelector).should('not.exist')
  })

  it('フッターに名前付きスロットを注入した場合、フッターにスロットの内容が表示される', () => {
    cy.mount(Modal, { slots: { footer: 'Custom Footer' } })
    cy.get(footerSelector).should('have.text', 'Custom Footer')
  })
})

/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import PageBody from '../PageBody'


describe('PageBody', () => {

  it('should be a function', () => {
    expect(typeof PageBody).toBe('function')
  })

  it('should be a functional component', () => {
    let comp

    comp = TestRenderer.create(
      <PageBody/>
    )

    // Functional components don't have instances.
    expect(comp.getInstance()).toBe(null)
  })

  describe('rendered', () => {

    describe('with no props', () => {

      it('should use default props', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageBody/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with children', () => {

      it('should render children', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageBody>
            <span>Child</span>
          </PageBody>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with className', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageBody className="Foo"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compClassName', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageBody compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageBody className="foo" compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageBody className="foo" compClassName="page-body"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compType', () => {

      it('should render with expected component', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageBody compType="article"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageBody compType="div"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageBody compType="main"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageBody compType="section"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

  })

})

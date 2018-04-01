/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import PageHead from '../PageHead'


describe('PageHead', () => {

  it('should be a function', () => {
    expect(typeof PageHead).toBe('function')
  })

  it('should be a functional component', () => {
    let comp

    comp = TestRenderer.create(
      <PageHead/>
    )

    // Functional components don't have instances.
    expect(comp.getInstance()).toBe(null)
  })

  describe('rendered', () => {

    describe('with no props', () => {

      it('should use default props', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageHead/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with children', () => {

      it('should render children', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageHead>
            <span>Child</span>
          </PageHead>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with className', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageHead className="Foo"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compClassName', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageHead compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageHead className="foo" compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageHead className="foo" compClassName="page-head"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compType', () => {

      it('should render with expected component', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageHead compType="div"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageHead compType="header"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageHead compType="section"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

  })

})

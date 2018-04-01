/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import PageFoot from '../PageFoot'


describe('PageFoot', () => {

  it('should be a function', () => {
    expect(typeof PageFoot).toBe('function')
  })

  it('should be a functional component', () => {
    let comp

    comp = TestRenderer.create(
      <PageFoot/>
    )

    // Functional components don't have instances.
    expect(comp.getInstance()).toBe(null)
  })

  describe('rendered', () => {

    describe('with no props', () => {

      it('should use default props', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageFoot/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with children', () => {

      it('should render children', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageFoot>
            <span>Child</span>
          </PageFoot>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with className', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageFoot className="Foo"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compClassName', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageFoot compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageFoot className="foo" compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageFoot className="foo" compClassName="page-foot"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compType', () => {

      it('should render with expected component', () => {
        let comp, tree

        comp = TestRenderer.create(
          <PageFoot compType="div"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageFoot compType="footer"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <PageFoot compType="section"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

  })

})

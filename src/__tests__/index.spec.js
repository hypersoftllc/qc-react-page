/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'

import Page from '../'
import PageBody from '../PageBody'
import PageFoot from '../PageFoot'
import PageHead from '../PageHead'
import PageSidebar from '../PageSidebar'


describe('Page', () => {

  it('should be a function', () => {
    expect(typeof Page).toBe('function')
  })

  describe('.Body', () => {

    it('should be a function', () => {
      expect(typeof Page.Body).toBe('function')
      expect(Page.Body === PageBody)
    })

  })

  describe('.Foot', () => {

    it('should be a function', () => {
      expect(typeof Page.Foot).toBe('function')
      expect(Page.Foot === PageFoot)
    })

  })

  describe('.Head', () => {

    it('should be a function', () => {
      expect(typeof Page.Head).toBe('function')
      expect(Page.Head === PageHead)
    })

  })

  describe('.Sidebar', () => {

    it('should be a function', () => {
      expect(typeof Page.Sidebar).toBe('function')
      expect(Page.Sidebar === PageSidebar)
    })

  })

})

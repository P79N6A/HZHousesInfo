import React, { Component } from 'react'
import cx from 'classnames'
import Layout from '@icedesign/layout'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'

import './BasicLayout.scss'

const theme = 'dark'

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout fixable style={{ minHeight: '100vh' }} className={cx(`basic-layout-${theme} ice-design-layout`)}>
        <Layout.Section>
          <Layout.Aside width={240}>
            <Aside />
          </Layout.Aside>

          <Layout.Main scrollable>
            {this.props.children}
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    )
  }
}

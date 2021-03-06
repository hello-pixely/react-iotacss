import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import propsToUtilClasses from './utils/propsToUtilClasses'
import restProps from './utils/restProps'


class Base extends Component {

  static defaultProps = {
    tagName: 'div'
  }

  static propTypes = {
    /** HTML element string or React component to render */
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element
    ]),
    /** Applies extra classes to component */
    className: PropTypes.string,

    /** HTML element or React component to render */
    children: PropTypes.node,

    /** Applies vertical align using align items */
    uAi: PropTypes.string,
    /** Applies vertical align using align utility */
    uAlign: PropTypes.string,
    /** Applies background color value using bgcolor utility */
    uBgcolor: PropTypes.string,
    /** Applies clearfix using clearfix utility */
    uCf: PropTypes.bool,
    /** Applies color value using color utility */
    uColor: PropTypes.string,
    /** Applies display type using display utility */
    uDisplay: PropTypes.string,
    /** Applies flex direction using flex direction utility */
    uFd: PropTypes.string,
    /** Applies float direction using float utility */
    uFloat: PropTypes.string,
    /** Applies horizontal alignment using justify content utility */
    uJc: PropTypes.string,
    /** Applies margin using margin utility */
    uM: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies margin top using margin utility */
    uMt: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies margin right using margin utility */
    uMr: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies margin bottom using margin utility */
    uMb: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies margin left using margin utility */
    uMl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies vertical margin using margin utility */
    uMv: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies horizontal margin using margin utility */
    uMh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies opacity size using opacity utility */
    uOpacity: PropTypes.string,
    /** Applies padding using margin utility */
    uP: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies padding top using margin utility */
    uPt: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies padding right using margin utility */
    uPr: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies padding bottom using margin utility */
    uPb: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies padding left using margin utility */
    uPl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies vertical padding using margin utility */
    uPv: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies horizontal padding using margin utility */
    uPh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Applies position type using position utility */
    uPosition: PropTypes.string,
    /** Applies after offset using pull utility */
    uPull: PropTypes.string,
    /** Applies offset using push utility */
    uPush: PropTypes.string,
    /** Applies width size using size utility */
    uSize: PropTypes.string,
    /** Applies text alignment using text utility */
    uText: PropTypes.string,
    /** Applies text transform using transform utility */
    uTransform: PropTypes.string,
    /** Applies font weight size using weight utility */
    uWeight: PropTypes.string
  }

  render() {
    const {
      tagName:Component,
      children,
      className,
    } = this.props

    const classes = classnames(className,
      propsToUtilClasses(this.props)
    )
    
    const rest = restProps(Base.propTypes, this.props);

    return (
      <Component className={classes} {...rest}>
        {children}
      </Component>
    )
  }

}


export default Base

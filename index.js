import { createElement as h } from 'react'
import TM from 'react-motion/lib/TransitionMotion'
import sp from 'react-motion/lib/spring'; 
import { object, string, func, bool } from 'prop-types'

const e = s => return Object.keys(s).reduce((a, b) => { a[b] = typeof s[b] === 'number' ? sp(s[b]) : s[b]; return a; }, {});
const al = p => p.atLeave; const aa = p => p.atActive; const ae = p => p.atEnter;

const RT = p => {
  const base = { data: p.children, key: p.pathname }
  const defaultStyles =
    !p.runOnMount ? null :
    !p.children ? [] :
    [{...base, style: ae(p) }];

  const styles =
    !p.children ? [] :
    [{...base, style: e(aa(p), p.opts) }]

  const willEnter = () => ae(p);
  const willLeave = () => e(al(p), p.opts);
  const tm = { willEnter, willLeave, defaultStyles, styles };
  const route = ({ key, style, data }) => {
    const p = {...{key}, {style: p.mapStyles(style)}}
    return h("div", p, data)
  }
  const routes = routes => h("div", null, routes.map(route))
  return h(TM, tm, routes)
}

RT.defaultProps = {
  runOnMount: true,
  mapStyles: val => val,
  opts: { stiffness: 120, damping: 26 }
};

RT.propTypes = {
  atEnter: object.isRequired,
  atActive: object.isRequired,
  atLeave: object.isRequired,
  pathname: string.isRequired,
  mapStyles: func,
  runOnMount: bool,
  opts: object
};

export default RT;

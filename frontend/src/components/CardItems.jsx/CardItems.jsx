import { useState } from 'react';

import classNames from "classnames/bind";
import styles from "./cardItems.module.scss";
const cx = classNames.bind(styles)
function CardItems() {
    const [quantity, setQuantity] = useState(1)
    return (
        <tbody>
            <tr>
                <td>
                    <img
                        className={cx('img-table')}
                        src="data:image/webp;base64,UklGRvAEAABXRUJQVlA4IOQEAADQHQCdASqqAKoAPm02l0kkIqIhInHJuIANiWlu3V/gk56h9us77Q/tBlhcFNOjNU8s5yD+CL0mwlpRZxi2VlSyorzGHt1B9MXHw0fEwijeKK8btbLGe+OKGA23nbLT7uh8oTU9npStINt3whMYX1GKjjywGQ4XF1ojC8WfyZ6/8gNP5Rx8CA+mepmwdQq9+HUd/Ug2KMUvkAC1Rake07xSntywL++dtyMGx+klp30ntQ63F6EHYd+i1LbXFANPJ5g+Mb3J6mTddQheZ5uxK2EhqO6+nHuwkviJT5MP+o2S5ti8ReyxhOZ7sz9ldItIL3ZL9zAPAgYAAP76+MGiAZy9YsJ8sHKr7vl30H1C7kGNHvSJ5h4PGs2qWdIellShSLtPj1ND2JJOyhWUpSii4dszfsbzMVnxgvOsFhep7UBzyRcWfass7aoo6ZucZSYTnUlVyhCJVG/JDsQb5reTz9KJhSMFAiwIK618l/ZsAbmS/Tazc8HSCJAjrGjvbccKP6k4/DWrZNuvGdMRIrUf2jFAwjbqp82S3p29AvRF35cdCtra5HqaTkLaaeAG3P3pcmqy2YniH5sv+SCLMHn3Lrw0GfIhWuw7sx2y1WpDyB2BwicdFSEMoKtTHO/5nShXMJYhJ27mGkufMYWda98HYwldVILuemRlcXhidMP1iMz11gfn8wPA8QGrWi8MOhC7aDF9qzZGi+qr+1e11sS6iAAN0qeNWDqhrdd2cXy71jR0RjZnQ8sQk8vXOPFOODLey8AM5XFM0slLTF1DR5TMxEkx9XofvevoWeL16TlnyrsAfzsrE7Wgn23d3YzzvZa1q1f16CUXApKRZsFze6nfVB3U8aSFi8XBmaJfddRAwWGN0eoVYW3QxWGnFsufS5qvuaO37EIeufVz2rgh0jcB91X2KLQOXr0uQXIms8INBcN0bx0NeSdvHTm21m9bgjJDj7AhiVKkkvqStXDzIjgKpKjufVlb9lfK/VSUig9KnCpUENMD67k5OnOA2o3MlW+zcyC3SnhU28hJP3BlQ6dgrpVrd5S31f3ZMHxCRqzilBO1+n1g+TDgVZJxq3b4L1naPtJ6NTIPJn5Azcpy3Sa8bfbNpD0I5laCKkBr4wkETSVkx7nnQJwd/OdrgrVzAZTcVEbpdHxjT9W4zOkmH0i3+pWibhX6El9vdulfU5vUQOeAjPR90S/6L1AIoQEGa8Xx6mdr3yzWydHRhIqJlDrjYW2RvohR95V++x/2eOc2/ixddyCiuZdakhTtgVVQkmQ0itjyonrR8ClHT82f3CIcbEtIHtKLua603W3v6PJYzlWOj3yXQVbId0AKjdSgILM8OiaYaJy6oRRcr314lsfjxMJsd65iycl+eY5gRGXP+zVN/oxqOkX9T0Jh9GIDiqHgmmdz/uTHhzKOCmDMdZJkut891grTu+KRMkyKS2/Gcy8vcqA1MxLijDBbPwOYguTuQImGoo8A92oZPQyv3pBgiitNXY3QwcL8B0Ktdu5dAHjSLjbQvPYjY2I37Wd17NhlFu1JpmTuOTmhPbe61abc3V3PN5nea7giwR/yj1UN9k5L+4TUPNwjo0D0DyMoppzQCYaO+P78599X6gtLpoWnn0HLzK1/oomllDS60xqraCRsQzg/IyFfVnYUOOd1VALYwfgI0AAA" alt="" />
                </td>
                <td>
                    <h5 className={cx('product-name')}>Pure Pineapple</h5>
                </td>
                <td>
                    50.000
                </td>
                <td>
                    <div className={cx('quatity')}>
                        <span
                            onClick={() => setQuantity(pre => {
                                if (pre == 1) {
                                    return 1
                                }
                                return pre - 1
                            })}
                            className={cx('subtraction')}>-</span>
                        <span>{quantity}</span>
                        <span onClick={() => setQuantity(pre => pre + 1)} className={cx('sumation')}>+</span>
                    </div>
                </td>
                <td>50.000</td>
                <td className={cx('delete')}>x</td>
            </tr>
        </tbody>
    )
}

export default CardItems
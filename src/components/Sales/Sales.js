import Default from '../Default/Default'
import CreateOpportunity from './Opportunities/Create/Create';
import UpdateOpportunity from './Opportunities/Update/Update'

const Sales = () => {
    const children = <>
        <CreateOpportunity />
        <UpdateOpportunity />
    </>

    return (
        <Default children={children} />
    )
}

export default Sales;
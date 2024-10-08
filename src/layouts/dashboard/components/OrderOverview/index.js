

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Experiment Updates
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              +30%
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              this month
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
      <TimelineItem
  icon={<FaBell size="16px" color={palette.info.main} />}
  title="Protein metabolism analysis completed"
  dateTime="22 DEC 7:20 PM"
/>
<TimelineItem
  icon={<FaBell size="16px" color={palette.error.main} />}
  title="DNA repair gene analysis"
  dateTime="21 DEC 11 PM"
/>
<TimelineItem
  icon={<FaBell size="16px" color={palette.lightblue.main} />}
  title="Immune response data finalized"
  dateTime="21 DEC 9:34 PM"
/>
<TimelineItem
  icon={<FaBell size="16px" color={palette.warning.main} />}
  title="T-cell suppression findings"
  dateTime="20 DEC 2:20 AM"
/>

      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;

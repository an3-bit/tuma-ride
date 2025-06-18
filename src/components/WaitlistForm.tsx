
import WaitlistFormContainer from "./waitlist/WaitlistFormContainer";
import { WaitlistFormProps } from "./waitlist/types";

const WaitlistForm = (props: WaitlistFormProps) => {
  return <WaitlistFormContainer {...props} />;
};

export default WaitlistForm;

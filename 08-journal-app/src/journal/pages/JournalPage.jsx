import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../view";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quo porro
        adipisci aliquid. Enim provident temporibus officiis nihil, assumenda
        reiciendis, eaque doloribus libero adipisci repellat nam earum cum,
        culpa quas.
      </Typography> */}
      <NothingSelectedView />
      { /** NoteView  */}
    </JournalLayout>
  );
};

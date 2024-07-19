import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext, useState } from "react";
import LoginContext from "@/utils/contexts/login";
import { getVariantClassName } from "@/utils/getVariantClassName";
import { STARTER_PERSONAS } from "@/utils/contexts/StarterUserPersonas";

interface Persona {
  personaname: string;
  personatype: string;
  personaimage: string;
  personaemail: string;
  personarole: string;
}

interface QuickLoginDialogProps {
  personas: Persona[];
  variant: "bank" | "airlines" | "market" | "investment";
}

export function QuickLoginDialog({ variant }: QuickLoginDialogProps) {
  const { user, loginUser } = useContext(LoginContext);
  const variantClass = getVariantClassName(variant);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const personaClicked = (persona: Persona) => {
    loginUser(persona.personaname, persona.personaemail, persona.personarole);
  };
  return (
    <>
      {isDialogOpen ? (
        <Dialog>
          <DialogTrigger
            className={`w-full min-h-full p-1  font-audimat rounded-none text-xl border-2 border-loginComponentBlue text-black hover:text-white hover:bg-gray-800`}
          >
            Quick Login
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px] w-4/5 flex flex-col justify-center items-center gap-10">
            <DialogHeader>
              <DialogTitle className="mb-4">Quick Login SSO User</DialogTitle>

              <div className="flex overflow-x-auto space-x-4 ">
                {STARTER_PERSONAS
                  .filter((persona) => persona.personaname !== user)
                  .map((persona, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center mr-2 cursor-pointer flex-shrink-0 hover:brightness-125"
                    >
                      <img
                        src={persona.personaimage}
                        className="w-20 h-20 rounded-full"
                        onClick={() => personaClicked(persona)}
                        alt={persona.personaname}
                      />
                      <p className="text-md font-sohnelight text-center mt-2">
                        {persona.personaname}
                      </p>
                      <p className="text-md font-sohnelight text-center mt-2"> {persona.personarole}</p>
                    </div>
                  ))}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}
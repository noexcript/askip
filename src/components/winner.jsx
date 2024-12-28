import { useState } from "react";
import { useForm } from "react-hook-form";
import { PlusCircle, Github, Twitter, Linkedin, Globe, Youtube, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  facebook: z.string().url("Must be a valid URL").optional(),
  youtube: z.string().url("Must be a valid URL").optional(),
  instagram: z.string().url("Must be a valid URL").optional(),
});

const INITIAL_USERS = [
  {
    name: "Sarah Wilson",
    facebook: "https://facebook.com/sarahw",
    youtube: "https://youtube.com/@sarahw",
    instagram: "https://instagram.com/sarahw",
  },
  {
    name: "Michael Chen",
    facebook: "https://facebook.com/michaelc",
    youtube: "https://youtube.com/@michaelc",
    instagram: "https://instagram.com/michaelc",
  },
  {
    name: "Emma Rodriguez",
    facebook: "https://facebook.com/emmar",
    youtube: "https://youtube.com/@emmar",
    instagram: "https://instagram.com/emmar",
  },
];

const Winner = () => {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      facebook: "",
      youtube: "",
      instagram: "",
    },
  });

  const onSubmit = (data) => {
    setUsers([...users, data]);
    form.reset();
    setOpen(false);
  };

  const UserForm = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="facebook"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook Link (optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://facebook.com/username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="youtube"
          render={({ field }) => (
            <FormItem>
              <FormLabel>YouTube Channel (optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://youtube.com/@username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instagram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram Link (optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://instagram.com/username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full rounded-none bg-blue-950 hover:bg-blue-900 h-12">
          {/* {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
         Registar
        </Button>
       
      </form>
    </Form>
  );

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Vencedores de prémio de €15000 </h2>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-none bg-blue-950 hover:bg-blue-900 h-12">
                  <PlusCircle className="mr-2 h-8 w-8" />
                  Novo vencedor
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-none bg-opacity-100 text-white">
                <DialogHeader>
                  <DialogTitle>Registar o novo Vencedor do pémio de €15000</DialogTitle>
                </DialogHeader>
                <UserForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="border-none bg-black bg-opacity-45 text-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vencedor</TableHead>
                  <TableHead>Facebook</TableHead>
                  <TableHead>Instagram</TableHead>
                  <TableHead>Youtube</TableHead>
                  <TableHead>Operação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      {user.name}
                    </TableCell>
                    <TableCell>
                      {user.facebook && (
                        <a
                          href={user.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary group hover:text-blue-600 flex items-center justify-start gap-4 text-white"
                        >
                          <Facebook className="h-8 w-8 group-hover:text-blue-950" /> {user.facebook}
                          <span className="sr-only">Facebook Link</span>
                        </a>

                      )}
                    </TableCell>
                    <TableCell>
                      {user.youtube && (

                        <a
                          href={user.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-blue-600 flex items-center justify-start gap-4 text-white"
                        >
                          <Youtube className="h-8 w-8" />{user.youtube}
                          <span className="sr-only">YouTube channel</span>
                        </a>

                      )}
                    </TableCell>
                    <TableCell>
                      {user.instagram && (
                        <a
                          href={user.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-blue-600 flex items-center justify-start gap-4 text-white"
                        >
                          <Instagram className="h-8 w-8" />{user.instagram}
                          <span className="sr-only">Instagram Link</span>
                        </a>

                      )}

                    </TableCell>
                  </TableRow>
                ))}
                {users.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No users registered yet
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Winner;

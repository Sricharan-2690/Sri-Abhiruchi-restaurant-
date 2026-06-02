import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface BookingDialogProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
];

export function BookingDialog({ trigger, open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Local state if not controlled
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const handleOpenChange = onOpenChange || setInternalOpen;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      handleOpenChange(false);
      toast.success("Table Booked Successfully!", {
        description: `We look forward to hosting you on ${date ? format(date, "PPP") : "your selected date"}.`,
      });
      // Reset form
      setDate(undefined);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px] overflow-visible z-[100]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-primary">Book a Table</DialogTitle>
          <DialogDescription>
            Reserve your spot at Sri Abhiruchi. We'll send you a confirmation message shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required placeholder="+91 98765 43210" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Date</Label>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-[110]" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="grid gap-2">
              <Label>Time</Label>
              <Select required>
                <SelectTrigger>
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="z-[110]">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label>Number of Guests</Label>
            <Select required>
              <SelectTrigger>
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="How many people?" />
              </SelectTrigger>
              <SelectContent className="z-[110]">
                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                  <SelectItem key={num.toString()} value={num.toString()}>
                    {num} {num === 1 ? "Person" : "People"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full mt-4" disabled={isSubmitting || !date}>
            {isSubmitting ? "Confirming..." : "Confirm Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

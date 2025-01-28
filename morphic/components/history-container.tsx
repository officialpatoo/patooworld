import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Chat } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react'; 

type HistoryItemProps = {
  chat: Chat;
  showOnlyUserChats?: boolean; // Optional prop to control visibility
};

const formatDateWithTime = (date: Date | string) => {
  // ... (same as before)
};

const HistoryItem: React.FC<HistoryItemProps> = ({ chat, showOnlyUserChats = true }) => { 
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActive = pathname === chat.path;

  if (showOnlyUserChats && chat.userId !== session?.user?.id) {
    return null; 
  }

  return (
    // ... (rest of the component remains the same)
  );
};

export default HistoryItem;

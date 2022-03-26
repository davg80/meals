<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

trait ResourceId
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['user_read', 'user_details_read', 'article_read', 'article_details_read'])]
    private $id;

    public function getId(): ?int
    {
        return $this->id;
    }
}
